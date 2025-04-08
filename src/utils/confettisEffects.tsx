export const getSpiralConfettis = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  for (let i = 0; i < 22; i++) {
    const angle = 0.35 * i;
    const x = (0.2 + 1.5 * angle) * Math.cos(angle);
    const y = (0.2 + 1.5 * angle) * Math.sin(angle);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.closePath();
};
export const getCircleConfettis = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffcc00";
  ctx.fill();
};
export const getLineConfettis = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(25, 15);
  ctx.stroke();
};
export const getHeartConfettis = (ctx: CanvasRenderingContext2D) => {
  let path = new Path2D(
    "M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
  );
  ctx.scale(0.5, 0.5);
  ctx.beginPath();
  ctx.fillStyle = "#ff8080";
  ctx.fill(path);
};
export const getStarConfettis = (ctx: CanvasRenderingContext2D) => {
  let path = new Path2D(
    "M95.7073,36.5936a6.0024,6.0024,0,0,0-4.8457-4.084L64.963,28.742,53.3789,5.2751c-2.0156-4.1016-8.7422-4.1016-10.7578,0L31.037,28.742,5.1384,32.51A5.9979,5.9979,0,0,0,1.81,42.74L20.5545,61.01,16.1307,86.8029a5.9994,5.9994,0,0,0,8.7071,6.3223L48,80.9493,71.1622,93.1252a5.9994,5.9994,0,0,0,8.7071-6.3223L75.4455,61.01,94.19,42.74A6.0013,6.0013,0,0,0,95.7073,36.5936ZM64.8106,54.6171a5.9988,5.9988,0,0,0-1.7226,5.3087l2.9,16.9219L50.7949,68.8614a5.994,5.994,0,0,0-5.59,0L30.0116,76.8477l2.9-16.9219a5.9988,5.9988,0,0,0-1.7226-5.3087L18.8963,42.6347,35.8827,40.162A5.9891,5.9891,0,0,0,40.4,36.8807L48,21.4881l7.6,15.3926a5.9891,5.9891,0,0,0,4.5176,3.2813l16.9864,2.4727Z"
  );
  ctx.scale(0.2, 0.2);
  ctx.beginPath();
  ctx.fillStyle = "#ffcc00";
  ctx.fill(path);
};
