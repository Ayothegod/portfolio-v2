export default function ContactAction() {
  return (
    <div className="bg-light-secondary dark:bg-dark-secondary border border-light-hover dark:border-dark-hover rounded-md">
      <h3 className="text-center text-dark dark:text-light block font-bold border-b p-4">
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
