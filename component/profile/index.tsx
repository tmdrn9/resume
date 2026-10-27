import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name } = payload;
  return (
    <div className={`profile-section mt-5${image ? '' : ' profile-section--without-image'}`}>
      <Row className="profile-main-row">
        {image ? (
          <Col md={3} sm={12} className="profile-media-col">
            <ProfileImage src={image} />
          </Col>
        ) : null}
        <Col md={image ? 9 : 12} sm={12} className="profile-body-col">
          {createNameArea(name)}
          {createProfileContactMap(contact)}
        </Col>
      </Row>
    </div>
  );
}
function createNameArea(name: Payload['name']) {
  return (
    <Row className="profile-name-row">
      <Col className="text-center text-md-left">
        <h1 className="profile-name" style={Style.blue}>
          {name.title} <small>{name.small || ''}</small>
        </h1>
      </Col>
    </Row>
  );
}

function createProfileContactMap(contacts: Payload['contact']) {
  return (
    <Row className="profile-contacts-row">
      <Col className="pt-3">
        {contacts.map((contact, index) => (
          <ProfileContact key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}
