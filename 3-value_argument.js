const fristArgument = process.argv[2];
if (fristArgument === undefined) {
  console.log("No argument");
}else {
  console.log(fristArgument);
}