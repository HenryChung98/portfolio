import { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("cpp", cpp);

export default function Banner() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[500px]">
        <pre className="rounded-lg bg-gray-800 p-4 overflow-x-auto">
          <code className="language-cpp" onClick={() => alert("Hello, I'm Henry Chung.")}>
            {`#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    struct Henry {
        string name = "Henry Chung";
        string email = "tongsik98@gmail.com";
        vector<string> roles = { "Game development", "Web development" };
        void greeting() { cout << "Hello, I'm " << name << "." << endl; }
    };
    Henry().greeting();
    return 0;
}`}
          </code>
        </pre>
        {/* <a
          className="text-3d uppercase"
          href="https://henry-chung-3d-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View 3D Portfolio (archived)
        </a> */}
      </div>
    </>
  );
}
