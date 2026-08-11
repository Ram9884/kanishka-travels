import React from 'react';

interface JsonLdScriptProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
}

export default function JsonLdScript({ data, id = 'jsonld-schema' }: JsonLdScriptProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
