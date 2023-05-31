export const showMessage = (arrayMessage: any) => {
  let message: string = concatenateMessage(arrayMessage);
  console.log(message);
};

function concatenateMessage(arrayMessage: any): string {
  let message = "";
  arrayMessage.forEach((item: any) => {
    message += item.toString() + " ";
  });

  return message;
}
