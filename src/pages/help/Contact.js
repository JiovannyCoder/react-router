import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData();

    return (
        <div className="container">
            <Form method="post" action="/help/contact">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea name="message" className="form-control" cols="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                { data && data.error && <p className="text-danger">{ data.error }</p> }
            </Form>
        </div>
    );
}

export default Contact;

export const contactAction = async ({ request }) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    if(submission.message.length < 10) {
        return { error: 'Message must be at least 10 chars' }
    }

    console.log(submission);

    return redirect('/');
}