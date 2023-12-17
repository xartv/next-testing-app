export default async function AddPost() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "32px",
      }}
    >
      <input type="text" placeholder="Введите заголовок поста" />
      <input type="text" placeholder="Введите тело поста" />
      <button>Создать</button>
    </form>
  );
}
