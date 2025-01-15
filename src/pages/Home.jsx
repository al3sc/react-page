import ImageForm from '../components/ImageForm';
import showedImage from '../files/download_image.jpg';

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home() {
  const navigate = useNavigate();

  return(
    <>
      <h2>Home Page</h2>
      
      <Button onClick={() => navigate("/react-page/test/test_param")}>to Test Page ...</Button>
      
      <ImageForm showedImage={showedImage} />
    </>
  )
}

export default Home;