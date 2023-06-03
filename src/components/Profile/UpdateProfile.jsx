import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const UpdateProfile = ({user}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [mobile, setMobile] = useState(user.mobile);
  const [dob, setDob] = useState(user.dob);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email, age, gender, mobile, dob));
    dispatch(loadUser())
    navigate('/profile')
  };

  const {loading} = useSelector(state=>state.profile)

  return (
    <Container py={'16'} minH="90vh">
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          children="Update Profile"
          my="16"
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type={'text'}
            focusBorderColor="red.500"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type={'email'}
            focusBorderColor="red.500"
          />
          <Input
            value={age}
            onChange={e => setAge(e.target.value)}
            placeholder="Age"
            type={'text'}
            focusBorderColor="red.500"
          />
          <Input
            value={gender}
            onChange={e => setGender(e.target.value)}
            placeholder="Gender"
            type={'text'}
            focusBorderColor="red.500"
          />
          <Input
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            placeholder="Mobile"
            type={'text'}
            focusBorderColor="red.500"
          />
          <Input
            value={dob}
            onChange={e => setDob(e.target.value)}
            placeholder="Date Of Birth"
            type={'text'}
            focusBorderColor="red.500"
          />
          <Button isLoading={loading} w="full" colorScheme={'red'} type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
