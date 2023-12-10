"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <h1 style={{ color: "red" }}>Oops...there is error</h1>
      <p>{error.message}</p>
    </>
  );
}
