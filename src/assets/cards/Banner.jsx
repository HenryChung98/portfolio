import { useEffect, useState } from "react";
import hljs from "highlight.js/lib/core";
import ts from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("typescript", ts);

export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const reactExpertCode = `export default function Henry() {
  const profile = {
    name: "Henry Chung",
    email: "henrychung.dev@gmail.com",
    location: "Burnaby, BC, Canada",
    roles: ["Web development", "Game development"],
  };

  const greeting = () => \`Hello, I'm \${profile.name}.\`;

  const ProfileField = ({ label, value }) => (
    <p className="mb-3">
      <span className="font-bold">{label}:</span> {value}
    </p>
  );

  return (
    <div className="bg-white p-6 rounded">
      <h3 className="text-lg mb-4 font-bold">{greeting()}</h3>
      <ProfileField label="Email" value={profile.email} />
      <ProfileField label="Location" value={profile.location} />
      <div>
        <p className="font-bold mb-1">Role:</p>
        <ul className="list-disc pl-5">
          {profile.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}`;

  const profile = {
    name: "Henry Chung",
    email: "henrychung.dev@gmail.com",
    location: "Burnaby, BC, Canada",
    roles: ["Web development", "Game development"],
  };
  const greeting = () => `Hello, I'm ${profile.name}.`;

  const ProfileField = ({ label, value }) => (
    <p className="mb-3">
      <span className="font-bold">{label}:</span> {value}
    </p>
  );

  return (
    <>
      <div className="flex h-[550px]">
        <pre className="rounded-lg bg-gray-800 p-4 overflow-x-auto cursor-pointer w-full">
          <code className="language-typescript" onClick={() => setIsModalOpen(true)}>
            {reactExpertCode}
          </code>
        </pre>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white p-6 rounded autoflow-auto">
              <h3 className="text-lg mb-4 font-bold text-gray-700!">{greeting()}</h3>
              <ProfileField label="Email" value={profile.email} />
              <ProfileField label="Location" value={profile.location} />
              <div>
                <p className="font-bold mb-1">Role:</p>
                <ul className="list-disc pl-5">
                  {profile.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
