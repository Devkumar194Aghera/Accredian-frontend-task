export default function FormValidation(details) {
  const error = {};
  let Username = details.Referrer_Name.toLowerCase().trim();
  Username.replace(" ", "_");
  let Friendname = details.Referre_Name.toLowerCase().trim();
  Friendname.replace(" ", "_");

  if (Username === Friendname) {
    error.Referre_Name = "Referrer and Referre Name must be different";
    error.Referrer_Name = "Referrer and Referre Name must be different";
  }
  if (
    details.Referrer_Email.toLowerCase().trim() ===
    details.Referre_Email.toLowerCase().trim()
  ) {
    error.Referre_Email = "Referrer and Referre Email must be different";
    error.Referrer_Email = "Referrer and Referre Email must be different";
  }
  return error;
}
