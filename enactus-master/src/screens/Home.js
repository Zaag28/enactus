import React from "react";
import Plans from "../Components/Plans";

const Home = () => {
  return (
    <>
      <div
        style={{
          width: "98%",
          height: "90vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 7,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red",
          }}
        >
          <iframe
            style={{
              border: 0,
              width: "75%",
              height: "75%",
              borderRadius: "12px",
            }}
            title="myFrame"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.521650984973!2d10.587328110961845!3d35.82981147242507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8af1a0f9c305%3A0xe7695e16f94e8452!2s%C3%89cole%20pluridisciplinaire%20internationale!5e1!3m2!1sfr!2sus!4v1709745260039!5m2!1sfr!2sus"
            allowFullScreen
          ></iframe>
        </div>
        <div
          style={{
            flex: 3,
            height: "100%",
            display: "flex",
            paddingTop: 100,
            // alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "green",
          }}
        >
          <Plans />
        </div>
      </div>
    </>
  );
};

export default Home;
