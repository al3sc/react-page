import { useState } from 'react'
import {Button} from 'react-bootstrap';

function DownloadForm(props) {
  const { downloadImage } = props;
  const [isDownloadable, setIsDownloadable] = useState(true)

  const handleButtonClick = () => {
    const link = document.createElement("a");
    link.href = downloadImage;
    link.download = "image.jpg"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloadable(false)
  }

  const handleRefresh = () => {
    setIsDownloadable(true)
  }

  return (<>
      { isDownloadable ?
        <div>
          <h3>Click to download the image...</h3>
          <Button onClick={handleButtonClick}>Download</Button>
        </div> :
        <div>
          <h3>Max times to download the image reached!</h3>
          <Button onClick={handleRefresh}>Refresh... </Button>
        </div>
      }
  </>)
}

export default DownloadForm;