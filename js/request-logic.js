// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {

  let extension = filename.match(/.*\.([^\.]*)$/)[1];
  let fileType;

  if (filename.includes('css')) {
    fileType = 'text';
  } else if (filename.includes('html')) {
    fileType = 'text';
  } else if (filename.includes('jpeg')) {
    fileType = 'image';
  } else if (filename.includes('jpg')) {
    fileType = 'image';
    extension = 'jpeg';
  } else {
    fileType = 'text';
    extension = 'plain';
  }

  return `${fileType}/${extension}`;

}