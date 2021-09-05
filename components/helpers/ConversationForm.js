import { useRouter } from 'next/router'

const ConversationForm = () => {
  const router = useRouter();

  const sendMessage = (e) => {
    e.preventDefault();

    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    fetch(form.action, { method: 'POST', body: formData })
    .then(res => res.json())
    .then(result => {
      if (result && result.success) {
        router.push('/thanks')
      }
    });
  }

  return (
    <form id="contactForm" className="w-full lg:w-3/4 mx-auto mt-8 lg:mt-16 mb-6" acceptCharset="UTF-8" action="https://usebasin.com/f/f7c69c472a15" onSubmit={sendMessage}>
      <div className="flex flex-col lg:flex-row flex-wrap text-left">
        <div className="w-full lg:w-1/2">
          <div className="mx-6">
            <label className="mb-2 block font-light text-lg" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="h-16 w-full border border-gray rounded-lg px-4" placeholder="John Doe" required />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-6">
            <label className="mb-2 block font-light text-lg" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="h-16 w-full border border-gray rounded-lg px-4" placeholder="johndoe@mail.com" required />
          </div>
        </div>
        <div className="w-full">
          <div className="mx-6 my-8">
            <label className="mb-2 block font-light text-lg" htmlFor="message">Message</label>
            <textarea name="message" id="message" className="h-56 w-full border border-gray rounded-lg p-4" placeholder="How can i help you today ?"></textarea>
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <button className="border-2 border-mainColor text-lg py-3 px-12 text-mainColor rounded-full hover:bg-mainColor hover:text-white transition duration-500 ease-in-out tracking-wide">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default ConversationForm