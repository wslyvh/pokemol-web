import React from 'react';
import { Stack, Flex, Image, Box, Icon, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import ContentBox from '../Shared/ContentBox';
import TextBox from '../Shared/TextBox';
import RaidLogo from '../../assets/themes/raidTheme/raidguild__avatar--pink.jpg';
import McvLogo from '../../assets/themes/mcv/mcv__brand__square.png';

const featureDaoList = [
  {
    name: 'Raid Guild',
    description: 'War Chest of Raid Guild',
    type: 'Guild',
    logo: RaidLogo,
    address: '0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d',
  },
  {
    name: 'MetaCartel',
    description: 'Airport for Web3',
    type: 'Grants',
    logo: McvLogo,
    address: '0xee629a192374caf2a72cf1695c485c5c89611ef2',
  },
  {
    name: 'MetaGammaDelta',
    description: 'Support women-led web3 projects',
    type: 'Grants',
    logo: RaidLogo,
    address: '0x7d58c962356ae66ba91b108751d67ae5d3b022fc',
  },
  {
    name: 'MetaCartel Ventures',
    description: 'A venture hydra',
    type: 'Venture',
    logo: McvLogo,
    address: '0x4570b4faf71e23942b8b9f934b47ccedf7540162',
  },
];

const FeaturedDaos = () => {
  return (
    <Stack>
      {featureDaoList.map((dao) => (
        <Link to={`/dao/${dao.address}`} key={dao.name}>
          <ContentBox as={Flex} justify='space-between' align='center'>
            <HStack spacing='25px'>
              <Image
                src={dao.logo}
                height='60px'
                width='60px'
                borderRadius='50px'
              />
              <Stack spacing='2px'>
                <TextBox colorScheme='white'>{dao.name}</TextBox>
                <Box fontSize='sm'>{dao.description}</Box>
                <Box
                  background='red.900'
                  borderRadius='30px'
                  p='2px 15px'
                  width='100px'
                  textAlign='center'
                >
                  {dao.type}
                </Box>
              </Stack>
            </HStack>
            <Box>
              <Icon as={RiArrowRightLine} h={6} w={6} color='secondary.500' />
            </Box>
          </ContentBox>
        </Link>
      ))}
    </Stack>
  );
};

export default FeaturedDaos;
