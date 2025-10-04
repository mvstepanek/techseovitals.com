import React from 'react';

interface SchemaMarkupProps {
  schema: object;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
);

export default SchemaMarkup;
