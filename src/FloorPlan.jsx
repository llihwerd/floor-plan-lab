import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return (
    <div>
      <h1>FloorPlan</h1>
      <Bedroom bedRoomNum={1}/>
      <Kitchen />
      <Bath size='Full'/>
      <Bedroom bedRoomNum={2}/>
      <LivingRoom />
      <Bath size='Half'/>
      <Bedroom bedRoomNum={3}/>
    </div>
  )
}

export default FloorPlan

