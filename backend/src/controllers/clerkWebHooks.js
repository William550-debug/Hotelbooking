import User from '../models/User.js'

import {Webhook} from 'svix'



const clerkWebHooks = async (req, res) => {
    try{
        //creating a SvIx instance with webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)


        //Getting the headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]

        };


        //verify headers
        await whook.verify(
            JSON.stringify(req.body), headers
        )


        //Getting data from  req.body
        const {data, type} = req.body
        

        const userData = {
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username:data.first_name + " " + data.last_name,
            image:data.image_url,
        }


        //Switch case for different event
        switch (type) {
            case "user.created":{
                await User.create(userData)
                break;
            }

            case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData)
                break
            }

            case "user.deleted":{
                await User.findByIdAndDelete(data.id)
                break
            }
            default:
                break;
        }
        res.JSON({
            success:true,
            message:"WebHook Received"
        })


    }catch(error){

        console.error(error.message)
        res.JSON({
            success:false,
            message:error.message
        })

    }
}

export default clerkWebHooks