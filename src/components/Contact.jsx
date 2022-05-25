const Contact = () => {

  return (
    <div name='contact' className='w-full  h-screen max-h-full bg-[#0a192f] flex justify-center items-center p-4 pt-16'>
        <form method='POST' action="https://getform.io/f/03d68f18-57ab-4aa4-bcde-8a995c61b208" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 pt-24'>
                <p className='text-4xl font-bold inline border-b-4 border-amber-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - lislelojo21@gmail.com</p>
            </div>
            <input className='bg-[#eff0ef] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#eff0ef]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#eff0ef] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-amber-600 hover:border-amber-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact