//   &#8226;

export default function EnterpreneuerProfile() {
  return (
    <div className="bg-[#C7D9FF] flex  flex-col items-center px-[9px] py-[77px] gap-[77px]">
      <h1 className="text-[#152C5E] text-[24px] font-semibold">ჩემი პროფილი</h1>
      <div>
        <input
          type="file"
          id="image"
          name="image"
          accept=".jpg, .jpeg, .png, .gif"
          className=" border border-[dashed] rounded-full h-[50px]"
        />
      </div>
      <div className="relative">
        <input type="file" id="file-input" className="hidden" />

        <label
          for="file-input"
          class="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
        >
          Upload File
        </label>

        <span id="file-name" className="ml-4 text-gray-600"></span>
      </div>
    </div>
  );
}
