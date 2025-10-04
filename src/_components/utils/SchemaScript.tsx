import React from 'react';

interface SchemaScriptProps {
  schema: object;
}

const SchemaScript: React.FC<SchemaScriptProps> = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
);

export default SchemaScript;
