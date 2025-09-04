export default function ContactForm(){
    async function handleSubmit(formData:FormData):Promise<void>{
        "use server"
        const name = formData.get("name")?.toString();
        const email = formData.get("email")?.toString();
        const message = formData.get("mesage")?.toString();
        if(!name||!email||!message){
            console.error("All fields are required");
            return;
        }
        console.log("Form Submitted:",{name,email,message})
    }
    return(
        <form action={handleSubmit}>
            <input type="text" name="name" placeholder="Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <textarea  name="message" placeholder="Message"/>
            <button type="submit">Send</button>
        </form>
    )
}