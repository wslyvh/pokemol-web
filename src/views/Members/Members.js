import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import MembersList from '../../components/Members/MembersList';
import MemberSnapshot from '../../components/Members/MemberSnapshot';
import MembersActivityFeed from '../../components/Members/MembersActivityFeed';
import MemberInfoCard from '../../components/Shared/MemberInfoCard/MemberInfoCard';

const Members = () => {
  const [selectedMember, setSelectedMember] = useState();

  return (
    <Flex p={6} wrap='wrap'>
      <Box
        w={['100%', null, null, null, '60%']}
        pr={[0, null, null, null, 6]}
        pb={6}
      >
        <MembersList
          handleSelect={setSelectedMember}
          selectedMember={selectedMember}
        />
      </Box>
      <Box w={['100%', null, null, null, '40%']}>
        {selectedMember ? (
          <MemberInfoCard user={selectedMember} showMenu={true} />
        ) : (
          <MemberSnapshot selectedMember={selectedMember} />
        )}

        <MembersActivityFeed selectedMember={selectedMember} />
      </Box>
    </Flex>
  );
};

export default Members;