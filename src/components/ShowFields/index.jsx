/* eslint-disable react/prop-types */
import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import RoomIcon from '@material-ui/icons/Room';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';

const ShowFields = ({ fields }) => {
  const styles = useStyles();

  return (
    <Box className={styles.mapConatiner}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        }}
        defaultCenter={{
          lat: fields[0].coordinates.coordinates[0],
          lng: fields[0].coordinates.coordinates[1],
        }}
        defaultZoom={6}
      >
        {fields.map(
          ({
            coordinates: {
              coordinates: [latitude, longitude],
            },
            id,
            code,
          }) => (
            <Box lat={latitude} lng={longitude}>
              <RoomIcon className={styles.roomIcon} text='My Marker' />
              <Box className={styles.infoFieldContainer}>
                <Box className={styles.infoFieldLine}>
                  <Typography className={styles.infoFieldTitle}>
                    Id:{' '}
                  </Typography>
                  <Typography className={styles.infoFieldValue}>
                    {id}
                  </Typography>
                </Box>
                <Box className={styles.infoFieldLine}>
                  <Typography className={styles.infoFieldTitle}>
                    Code:{' '}
                  </Typography>
                  <Typography className={styles.infoFieldValue}>
                    {code}
                  </Typography>
                </Box>
                <Box className={styles.infoFieldLine}>
                  <Typography className={styles.infoFieldTitle}>
                    Longitude:{' '}
                  </Typography>
                  <Typography className={styles.infoFieldValue}>
                    {longitude.toFixed(2)}
                  </Typography>
                </Box>
                <Box className={styles.infoFieldLine}>
                  <Typography className={styles.infoFieldTitle}>
                    Latitude:{' '}
                  </Typography>
                  <Typography className={styles.infoFieldValue}>
                    {latitude.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        )}
      </GoogleMapReact>
    </Box>
  );
};

export default ShowFields;
