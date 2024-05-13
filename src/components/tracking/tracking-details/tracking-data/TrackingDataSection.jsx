import React from 'react'
import './TrackingDataSection.css'
import UserLogo from "../../../../assets/images/user.png"
import { JOB_STATUS_JSON } from '../../../../Api/api';
import { Check, GeoAlt, Rocket } from 'react-bootstrap-icons';
import { Timeline, TimelineItem } from './Timeline';
import dayjs from 'dayjs';
import { openImageInNewTab } from '../../../../utils/helper';

const JobSummaryData = ({trackingData}) => {
  if(trackingData !== null && trackingData?.job_details?.job_summary?.length > 0) {
    const jobCompletionIndex = trackingData?.job_details?.job_summary?.findIndex(job => job.job_completion_summary)
    if(jobCompletionIndex === -1) {
      return (
        <>
          {trackingData?.job_details?.job_summary?.map((job, index) => (
            <Timeline key={job.id}>
                <TimelineItem time={dayjs(job.time).format('hh:mm a')} date={job.date} icon={<Rocket size={20} color='rgb(101, 163, 13)' />} gradient={`${index % 2 === 0 ? 'gradient-1' : 'gradient-2'}`}>
                  <p>{job.msg}</p>
                </TimelineItem>
            </Timeline>
          ))}
        </>
      )
    } else {
      return (
        <>
          {trackingData?.job_details?.job_summary[0]?.job_completion_summary?.parcel_images?.length > 0 && (
            <Timeline>
              <TimelineItem gradient="gradient-3" time={dayjs(trackingData?.job_details?.job_summary[1].time).format('hh:mm a')} date={trackingData?.job_details?.job_summary[1].date} icon={<Check size={30} color='rgb(101, 163, 13)' style={{marginTop: "3px"}} />}>
                <article className='parcel-images'>
                  {trackingData?.job_details?.job_summary[0]?.job_completion_summary?.parcel_images?.map((parcel, index) => (
                    <img src={`${process.env.REACT_APP_PARCEL_IMG}/${parcel}`} alt={`Parcel-${index}`} key={index} onClick={() => openImageInNewTab(`${process.env.REACT_APP_PARCEL_IMG}/${parcel}`)} />
                  ))}
                </article>
              </TimelineItem>
            </Timeline>
          )}
          {trackingData?.job_details?.job_summary?.slice(1).map((job, index) => (
            <Timeline key={job.id}>
              <TimelineItem time={dayjs(job.time).format('hh:mm a')} date={job.date} icon={<Rocket size={20} color='rgb(101, 163, 13)' />} gradient={`${index % 2 === 0 ? 'gradient-1' : 'gradient-2'}`}>
                <p>{job.msg}</p>
              </TimelineItem>
            </Timeline>
          ))}
        </>
      )
    }
  }
};

const TrackingDataSection = ({trackingData}) => {

  return (
    <>
      <section className='tracking-data-section'>
        {trackingData !== null && Object.keys(trackingData).length > 0 && (
          <>
            {/* Driver Details */}
            {trackingData?.job_details?.driver_details && Object.keys(trackingData.job_details.driver_details).length > 0 && (
              <section className='driver-details'>
                <article className='driver-image'>
                  <img src={trackingData?.job_details?.driver_details?.profile ? `${process.env.REACT_APP_USER_IMAGE_URL}/${trackingData.job_details.driver_details.profile}` : UserLogo} alt="Driver Logo" onClick={() => {
                    if(trackingData.job_details.driver_details.profile) {
                      openImageInNewTab(`${process.env.REACT_APP_USER_IMAGE_URL}/${
                          trackingData.job_details.driver_details.profile
                        }`)
                    }
                  }} />
                </article>
                <article className='driver-info'>
                  <header>Driver : </header>
                  <footer className='driver-name'>{trackingData?.job_details?.driver_details?.name ? trackingData.job_details.driver_details.name : "No Driver Assigned"}</footer>
                </article>        
              </section>
            )}

            {/* Tracking Code / Consignment No */}
            <section className='consignment-details'>
              <article className='tracking-code'>
                <header>Tracking Code : </header>
                <footer>{trackingData?.tracking_details?.tracking_code || "N/A"}</footer>
              </article>
              <article className='consignment-code'>
                <header>Consignment No : </header>
                <footer>{trackingData?.tracking_details?.consignment_no || "N/A"}</footer>
              </article>
              <article className='order_no'>
                <header>Order No : </header>
                <footer>{trackingData?.tracking_details?.order_no || "N/A"}</footer>
              </article>
            </section>

            {/* Job Status */}
            <section className='job-status'>
              <header>Job Status : </header>
              <footer style={{backgroundColor: `${trackingData?.job_details?.job_status === JOB_STATUS_JSON.created ? "rgb(217, 119, 6)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.accepted ? "rgb(37, 99, 235)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.pickup ? "rgb(147, 51, 234)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.running ? "rgb(8, 145, 178)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.completed ? "rgb(22, 163, 74)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.cancelled ? "rgb(220, 38, 38)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.returned ? "rgb(101, 163, 13)" : ""}`}}>
                {trackingData?.job_details?.status}
              </footer>
            </section>

            {/* Dropoff Address Details */}
            <section className='dropoff-details'>
              <GeoAlt size={25} color='rgb(101, 163, 13)' />
              <article className='dropoff-address'>{trackingData?.job_details?.dropoff_details?.dropoff_address}</article>
            </section>

            {/* Delivered Details */}
            {trackingData?.job_details?.delivered_at && (
              <section className='delivered-details'>
                <header>Delivered At : </header>
                <footer>{dayjs(trackingData?.job_details?.delivered_at).format('MM/DD/YYYY hh:mm a')}</footer>
              </section>
            )}

            {/* Timeline - Job Summary */}
            <JobSummaryData trackingData={trackingData} />
          </>
        )}
      </section>

      {/* Tracking Details For Mobile Screen */}
      <section className='tracking-data-section-mobile'>
        {trackingData !== null && Object.keys(trackingData).length > 0 && (
          <article className='tracking-data-section-body'>
            {/* Driver Details */}
            {trackingData?.job_details?.driver_details && Object.keys(trackingData.job_details.driver_details).length > 0 && (
              <section className='driver-details'>
                <article className='driver-image'>
                  <img src={trackingData?.job_details?.driver_details?.profile ? `${process.env.REACT_APP_USER_IMAGE_URL}/${trackingData.job_details.driver_details.profile}` : UserLogo} alt="Driver Logo" onClick={() => {
                    if(trackingData.job_details.driver_details.profile) {
                      openImageInNewTab(`${process.env.REACT_APP_USER_IMAGE_URL}/${
                          trackingData.job_details.driver_details.profile
                        }`)
                    }
                  }} />
                </article>
                <article className='driver-info'>
                  <header>Driver : </header>
                  <footer className='driver-name'>{trackingData?.job_details?.driver_details?.name ? trackingData.job_details.driver_details.name : "No Driver Assigned"}</footer>
                </article>        
              </section>
            )}

            {/* Dropoff Address Details */}
            <section className='dropoff-details'>
              <GeoAlt size={25} color='rgb(101, 163, 13)' />
              <article className='dropoff-address'>{trackingData?.job_details?.dropoff_details?.dropoff_address}</article>
            </section>

            <section className='tracking-data-mobile-body'>
              {/* Tracking Code / Consignment No */}
              <section className='consignment-details'>
                <article className='tracking-code'>
                  <header>Tracking Code : </header>
                  <footer>{trackingData?.tracking_details?.tracking_code || "N/A"}</footer>
                </article>
                <article className='consignment-code'>
                  <header>Consignment No : </header>
                  <footer>{trackingData?.tracking_details?.consignment_no || "N/A"}</footer>
                </article>
                <article className='order_no'>
                  <header>Order No : </header>
                  <footer>{trackingData?.tracking_details?.order_no || "N/A"}</footer>
                </article>
              </section>

              {/* Job Status + Delivered At */}
              <section className='status-details'>
                <section className='job-status'>
                  <header>Job Status : </header>
                  <footer style={{backgroundColor: `${trackingData?.job_details?.job_status === JOB_STATUS_JSON.created ? "rgb(217, 119, 6)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.accepted ? "rgb(37, 99, 235)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.pickup ? "rgb(147, 51, 234)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.running ? "rgb(8, 145, 178)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.completed ? "rgb(22, 163, 74)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.cancelled ? "rgb(220, 38, 38)" : trackingData?.job_details?.job_status === JOB_STATUS_JSON.returned ? "rgb(101, 163, 13)" : ""}`}}>
                    {trackingData?.job_details?.status}
                  </footer>
                </section>
                
                {trackingData?.job_details?.delivered_at && (
                  <section className='delivered-details'>
                    <header>Delivered At : </header>
                    <footer>{dayjs(trackingData?.job_details?.delivered_at).format('MM/DD/YYYY hh:mm a')}</footer>
                  </section>
                )}
              </section>
            
              {/* Timeline - Job Summary */}
              {/* <JobSummaryData trackingData={trackingData} /> */}
            </section>
          </article>
        )}
      </section>
    </>
  )
}

export default TrackingDataSection