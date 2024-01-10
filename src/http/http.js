// const URL = "http://127.0.0.1:5000/upload";
const URL = "http://127.0.0.1:5000/ask";

export async function uploadFile(data) {
  console.log("raw data", data.uploadFile[0]);
  var form_data = new FormData();
  form_data.append("query", data.message);
  if (data.files.length != 0) {
    console.log("File  is there");
    data.files.forEach((element) => {
      form_data.append("file", element);
    });
  }
  console.log("formdata", form_data.get("file"));
  const response = await fetch(URL, {
    method: "POST",
    body: form_data,
  });
  console.log("DOne");
  const resData = await response.json();
  console.log("Res data after upload", resData);
  return resData.response;
  // return { response: "Hi" };
}
