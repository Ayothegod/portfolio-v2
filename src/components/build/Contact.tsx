export default function ContactAction() {
  return (
    <div className="box">
      <h3 className="text text-center block font-bold border-b p-4">
        New Message
      </h3>

      <div>
        <div className="flex">
            <label htmlFor="email" className="hidden md:block">E-mail</label>
            {/* <input type="text" name="email" placeholder="Enter your email" className="w-full"/> */}

        </div>
      </div>
    </div>
  );
}
