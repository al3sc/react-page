import DownloadForm from '../components/DownloadForm';
import downloadImage from '../files/download_image.jpg';

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();

  return(
    <>
      <h2>Home Page</h2>
      
      <DownloadForm downloadImage={downloadImage} />
      <Button onClick={() => navigate("/react-page/test/test_param")}>to Test Page...</Button>
    </>
  )
}

export default Home;