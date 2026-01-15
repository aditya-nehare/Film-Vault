function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 mt-10">
      <div className="border-t border-gray-800 py-6 flex justify-center">
        <div
          className="
            w-[90%] md:w-[728px]
            h-[90px]
            bg-gray-900
            border border-gray-700
            flex items-center justify-center
            text-sm text-gray-400
          "
        >
          Advertisement
        </div>
      </div>

      <div className="text-center text-xs py-4 text-gray-500">
        © {new Date().getFullYear()} MovieVerse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;


// Replace the inner Advertisement div with:
{/* <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXX"
     data-ad-slot="YYYYYYYY"
     data-ad-format="auto"
     data-full-width-responsive="true">
</ins> */}
