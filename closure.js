function tweetPost(content) {
  var editedContent =
    "Шинэ мэдээ: " + content + "\n\n Дэлгэрэнгүйг уг сайтаар орж хараарай.";
  console.log(editedContent);

  return function() {
    var email = prompt(
      editedContent +
        "\n\n Таньд энэ мэдээ таалагдсан уу? \nҮүнтэй төстэй мэдээллийг цаг алдалгүй авахыг хүсвэл имэйл хаягаа үлдээнэ үү?"
    );
    document.write("Баярлалаа. Бид таны " + email + " хаяг руу явуулах болно.");
  };
}

var medee =
  "Гэрээсээ GOOGLE-д ажилладаг аялагч, 25 настай монгол эмэгтэй: Б.Нандир";
var askEmailFnc = tweetPost(medee);
setTimeout(askEmailFnc, 5000);
