const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-md font-poppins font-medium outline-none text-primary ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
