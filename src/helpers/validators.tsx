export const validateName = (text: string): boolean => {
  const textRegex = new RegExp('^[A-Z][a-z]{1,25}');
  const valid = textRegex.test(text);
  return valid;
};

// export const validateImg = (curFiles: FileList) => {
//   if (curFiles.length > 0) {
//     const file = curFiles[0];
//     if (file.size < MAX_IMAGE_SIZE) {
//       return true;
//     } else {
//       return 'Maximum image size 1 Mb';
//     }
//   } else {
//     return 'Upload image';
//   }
// };

export const validateBirthDate = (date: string): boolean => {
  const today = new Date().toISOString().slice(0, 10);
  if (date > today) {
    return false;
  } else {
    return true;
  }
};
