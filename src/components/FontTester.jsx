import React from 'react';

const FontTester = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          Typography Preview
        </h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Heading Font: Montserrat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Font Weights</h3>
              <div className="space-y-3">
                <p className="font-heading font-normal">Normal (400) - Montserrat</p>
                <p className="font-heading font-medium">Medium (500) - Montserrat</p>
                <p className="font-heading font-semibold">Semibold (600) - Montserrat</p>
                <p className="font-heading font-bold">Bold (700) - Montserrat</p>
                <p className="font-heading font-extrabold">Extrabold (800) - Montserrat</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Heading Examples</h3>
              <div className="space-y-3">
                <h1 className="text-4xl">Heading 1</h1>
                <h2 className="text-3xl">Heading 2</h2>
                <h3 className="text-2xl">Heading 3</h3>
                <h4 className="text-xl">Heading 4</h4>
                <h5 className="text-lg">Heading 5</h5>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Body Font: Roboto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Font Weights</h3>
              <div className="space-y-3">
                <p className="font-sans font-light">Light (300) - Roboto</p>
                <p className="font-sans font-normal">Normal (400) - Roboto</p>
                <p className="font-sans font-medium">Medium (500) - Roboto</p>
                <p className="font-sans font-bold">Bold (700) - Roboto</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Paragraph Example</h3>
              <p className="mb-3">
                This is a paragraph using the Roboto font. It demonstrates how the body text looks with the new font. The line height, letter spacing, and overall readability have been optimized.
              </p>
              <p className="mb-3">
                <strong>This text is bold</strong>, while <em>this text is italicized</em>. <a href="#" className="text-primary hover:underline">This is a link</a> with the primary color.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Code Font: JetBrains Mono</h2>
          <code className="font-mono bg-gray-100 dark:bg-dark-lighter p-4 rounded block">
            const greeting = "Hello World!";<br />
            console.log(greeting);
          </code>
        </div>
      </div>
    </div>
  );
};

export default FontTester;