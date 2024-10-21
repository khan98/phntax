const Form = () => {
  return ( <form className="flex flex-col gap-4">
    <input type="text" className="input" placeholder="Full name"/>
    <input type="text" className="input" placeholder="Email address"/>
    <input type="text" className="input" placeholder="Phone number"/>
    <textarea className="textarea mb-2" placeholder="Message"/>
    <button type="submit" className="btn self-start">Send Message</button>
  </form>
  )
};

export default Form;
