export const BtnSection = ({ text }) => {
  return (
    <div>
      <button className="bg_primary text-white font-semibold p-4 rounded-full w-48 shadow-2xl transition-all hover:delay-75 hover:scale-105">
        {text}
      </button>
    </div>
  );
};
