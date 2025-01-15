import { useState } from 'react'
import {Button, Image, Row, Col} from 'react-bootstrap';

function ImageForm(props) {
  const { showedImage } = props;
  const [ show, setSHow ] = useState(true)

  const handleRefresh = () => {
    setSHow(prev => !prev)
  }

  return (<>
      { show ?
        <div>
          <h3>Click to hide the image...</h3>
          
          <Row>
            <Col>
              <Button onClick={handleRefresh}>Hide</Button>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Image src={showedImage} className="basic-image" fluid/>
            </Col>
          </Row>
          
          
        </div> :
        <div>
          <h3>Click to show the image again...</h3>
          <Button onClick={handleRefresh}>Show</Button>
        </div>
      }
  </>)
}

export default ImageForm;