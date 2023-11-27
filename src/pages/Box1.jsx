import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Box } from '@mui/material';
import speaker from "../assets/spinach.png"

gsap.registerPlugin(ScrollTrigger);

export default function Box1() {
  useEffect(() => {

    gsap.registerEffect({
      name: "zoom",
      effect: (targets, config) => {
        console.log(targets, config);
        const vars = {
          transformOrigin: "0px 0px", ...config
        },
          { scale, origin } = config,

          clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
        console.log("config", scale, origin);

        delete vars.origin;
        vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
        vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
        vars.overwrite = "auto";
        return gsap.to(targets, vars);
      },
      extendTimeLine: true,
      dafaults: { origin: [0.5, 0.5], scale: 2 }
    });

    const zoomData = [
      { scale: 1, origin: [0.5, 0.5] },
      { scale: 1.5, origin: [0.5, 0.5] },
      { scale: 2, origin: [0.8, 0.5] },
      { scale: 1.5, origin: [0.2, 0.5] },
      { scale: 1, origin: [0.5, 0.5] },
    ];

    gsap.utils.toArray("section").forEach((section, index) => {
      const zoom = zoomData[index];
      ScrollTrigger.create({
        trigger: section,
        start: "top 45%",
        end: "+=125%",
        onToggle(self) {
          if (self.isActive) {
            gsap.effects.zoom(".photo", {
              scale: zoom.scale,
              origin: zoom.origin,
              duration: 1,
              ease: "power1.inOut"
            });
          }
        }
      })
    })

  }, []);

  return (
    <>
      <Box sx={{
        px: 10,
        "& .right-side": {
          width: "30vw",
          position: 'fixed',
          right: 80,
          top: "50%",
          transform: "translateY(-50%)",
          height: "30vw",
          overflow: "hidden",
          backgroundColor: 'pink'
        },

        "& section": {
          position: 'relative',
          height: '100vh',
          width: "calc(60vw - 100px)",
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          "& .EachSectionInfo": {
            maxWidth: 700
          },
          "& h1": {
            fontSize: 40,
            letterSpacing: 1,
            textTransform: "uppercase"
          },
          "& p": {
            fontSize: 24,
            letterSpacing: 1,
            marginTop: "2rem",
            lineHeight: 1.6
          },
        },
        "& .photo": {
          width: '100%',
          height: '100%',
          backgroundImage: `url(${speaker})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'center'
        },
        "& .boxes": {
          // backgroundColor: 'pink',
          // display: 'flex'
        }
      }}>

        <Box className="right-side">
          <Box className="photo"></Box>
        </Box>

        <div className="boxes">
          <Box component="section">
            <Box className="EachSectionInfo">
              <h1>test</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, at! Totam, quod ipsa, nostrum ea excepturi eius magni libero ipsam doloremque dolor, rerum modi? Quo cum laboriosam harum perspiciatis ipsa.</p>
            </Box>
          </Box>

          <Box component="section">
            <Box className="EachSectionInfo">
              <h1>test</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, at! Totam, quod ipsa, nostrum ea excepturi eius magni libero ipsam doloremque dolor, rerum modi? Quo cum laboriosam harum perspiciatis ipsa.</p>
            </Box>
          </Box>


          <Box component="section">
            <Box className="EachSectionInfo">
              <h1>test</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, at! Totam, quod ipsa, nostrum ea excepturi eius magni libero ipsam doloremque dolor, rerum modi? Quo cum laboriosam harum perspiciatis ipsa.</p>
            </Box>
          </Box>

          <Box component="section">
            <Box className="EachSectionInfo">
              <h1>test</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, at! Totam, quod ipsa, nostrum ea excepturi eius magni libero ipsam doloremque dolor, rerum modi? Quo cum laboriosam harum perspiciatis ipsa.</p>
            </Box>
          </Box>

          <Box component="section">
            <Box className="EachSectionInfo">
            </Box>
          </Box>


        </div>


      </Box>

      {/* <div style={{ minHeight: '100vh' }}>

    </div> */}
    </>
  )
}
