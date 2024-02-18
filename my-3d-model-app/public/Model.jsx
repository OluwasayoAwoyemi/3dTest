/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 model.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={materials['Plastic.003']} position={[-10.194, 0, -11.578]} />
      <group position={[2.458, 0.15, 13.312]}>
        <mesh geometry={nodes.DoorFrane042.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane042_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane042_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[0.408, 0.15, 7.934]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.DoorFrane041.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane041_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane041_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[2.458, 0.15, -12.49]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.DoorFrane040.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane040_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane040_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[0.408, 0.15, -7.028]}>
        <mesh geometry={nodes.DoorFrane039.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane039_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane039_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 0.15, 10.661]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane038.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane038_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane038_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 0.15, 5.536]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane037.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane037_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane037_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 0.15, 0.286]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane036.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane036_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane036_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 0.15, -4.589]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane035.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane035_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane035_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 0.15, -9.839]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane034.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane034_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane034_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 3.15, 10.661]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane033.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane033_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane033_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 3.15, 5.536]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane032.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane032_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane032_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 3.15, 0.286]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane031.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane031_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane031_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 3.15, -4.589]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane030.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane030_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane030_2.geometry} material={materials['iron.002']} />
      </group>
      <group position={[-8.784, 3.15, -9.839]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.DoorFrane029.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.DoorFrane029_1.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.DoorFrane029_2.geometry} material={materials['iron.002']} />
      </group>
      <mesh geometry={nodes.doors_int.geometry} material={materials['wood dark.002']} position={[3.237, 0.15, -10.193]} />
      <mesh geometry={nodes.kam_obklad.geometry} material={materials['Omitka.002']} position={[8.683, 1.5, -10.629]} />
      <mesh geometry={nodes.kolejnice.geometry} material={materials['AluminumBrushed kolejnice.002']} position={[-8.831, 2.702, -12.707]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.027, -0.027, 0.027]} />
      <group position={[0.009, 3.253, 7.366]} rotation={[0, 0, Math.PI]} scale={0.983}>
        <mesh geometry={nodes.Circle010.geometry} material={materials['roof.003']} />
        <mesh geometry={nodes.Circle010_1.geometry} material={materials['Plastic.003']} />
      </group>
      <mesh geometry={nodes.okenice.geometry} material={materials['wood.002']} position={[8.856, 1.16, -11.29]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.podlaha.geometry} material={materials['podlaha.002']} position={[4.808, 0.15, 9.601]} />
      <mesh geometry={nodes.pricky.geometry} material={materials['Omitka.002']} position={[4.521, 1.15, -8.379]} />
      <mesh geometry={nodes.pricky_2NP.geometry} material={materials['Omitka.002']} position={[5.307, 4.35, -11.644]} />
      <group position={[-0.225, 5.668, 9.005]}>
        <mesh geometry={nodes.Plane020.geometry} material={materials['roof.003']} />
        <mesh geometry={nodes.Plane020_1.geometry} material={materials['iron.002']} />
      </group>
      <group position={[0.451, 5.373, 12.495]} rotation={[2.391, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Layer_VMS2009.geometry} material={materials['roleta.002']} />
        <mesh geometry={nodes.Layer_VMS2009_1.geometry} material={materials['wood dark.002']} />
        <mesh geometry={nodes.Layer_VMS2009_2.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Layer_VMS2009_3.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.Layer_VMS2009_4.geometry} material={materials['roof.003']} />
      </group>
      <group position={[0.48, 5.373, 8.752]} scale={0.105}>
        <mesh geometry={nodes.Plane019.geometry} material={materials['roof.003']} />
        <mesh geometry={nodes.Plane019_1.geometry} material={materials['roleta.002']} />
        <mesh geometry={nodes.Plane019_2.geometry} material={materials['wood dark.002']} />
        <mesh geometry={nodes.Plane019_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane019_4.geometry} material={materials['Plastic.003']} />
      </group>
      <group position={[8.683, 1.5, -10.629]}>
        <mesh geometry={nodes.Cube031.geometry} material={materials['podlaha.002']} />
        <mesh geometry={nodes.Cube031_1.geometry} material={materials['iron.002']} />
      </group>
      <group position={[7.458, 2.834, -11.179]}>
        <mesh geometry={nodes.Cube030.geometry} material={materials['Omitka.002']} />
        <mesh geometry={nodes.Cube030_1.geometry} material={materials['podlaha.002']} />
      </group>
      <mesh geometry={nodes.strop_2NP.geometry} material={materials['Omitka.002']} position={[4.373, 5.55, 11.273]} />
      <group position={[0.508, 2.763, 1.715]}>
        <mesh geometry={nodes.Cube029.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.Cube029_1.geometry} material={materials['podlaha.002']} />
      </group>
      <group position={[-9.592, 2.763, 3.107]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Cube028.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.Cube028_1.geometry} material={materials['podlaha.002']} />
      </group>
      <group position={[8.683, 1.5, -10.629]}>
        <mesh geometry={nodes.Cube027.geometry} material={materials['Omitka.002']} />
        <mesh geometry={nodes.Cube027_1.geometry} material={materials['podlaha.002']} />
      </group>
      <group position={[-0.243, 3.15, 4.921]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid110.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid110_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[2.471, 5.366, -11.648]} rotation={[0.744, 0, Math.PI]} scale={0.1}>
        <mesh geometry={nodes.Layer_VMS2008.geometry} material={materials['roleta.002']} />
        <mesh geometry={nodes.Layer_VMS2008_1.geometry} material={materials['wood dark.002']} />
        <mesh geometry={nodes.Layer_VMS2008_2.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Layer_VMS2008_3.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.Layer_VMS2008_4.geometry} material={materials['roof.003']} />
      </group>
      <group position={[1.836, 5.2, -7.755]}>
        <mesh geometry={nodes.Plane017.geometry} material={materials['roof.003']} />
        <mesh geometry={nodes.Plane017_1.geometry} material={materials['roleta.002']} />
        <mesh geometry={nodes.Plane017_2.geometry} material={materials['wood dark.002']} />
        <mesh geometry={nodes.Plane017_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane017_4.geometry} material={materials['Plastic.003']} />
      </group>
      <group position={[4.297, 5.112, 8.517]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Plane016.geometry} material={materials['roof.003']} />
        <mesh geometry={nodes.Plane016_1.geometry} material={materials['roleta.002']} />
        <mesh geometry={nodes.Plane016_2.geometry} material={materials['wood dark.002']} />
        <mesh geometry={nodes.Plane016_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane016_4.geometry} material={materials['Plastic.003']} />
      </group>
      <group position={[1.537, 4.637, 13.169]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.105}>
        <mesh geometry={nodes.Plane015.geometry} material={materials['roof.003']} />
        <mesh geometry={nodes.Plane015_1.geometry} material={materials['roleta.002']} />
        <mesh geometry={nodes.Plane015_2.geometry} material={materials['wood dark.002']} />
        <mesh geometry={nodes.Plane015_3.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Plane015_4.geometry} material={materials['Plastic.003']} />
      </group>
      <group position={[3.763, 4.103, -7.099]} rotation={[3.141, 0, 0]} scale={0.1}>
        <mesh geometry={nodes.Layer_VMS2007.geometry} material={materials['roleta.002']} />
        <mesh geometry={nodes.Layer_VMS2007_1.geometry} material={materials['wood dark.002']} />
        <mesh geometry={nodes.Layer_VMS2007_2.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Layer_VMS2007_3.geometry} material={materials['Plastic.003']} />
      </group>
      <group position={[8.73, 0.15, 9.471]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid109.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid109_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.747, -8.214]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid108.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid108_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-0.243, 0.15, -4.079]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid107.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid107_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-0.243, 0.15, 0.421]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid106.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid106_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-0.243, 0.15, 4.921]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid105.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid105_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-0.243, 3.15, -4.079]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid104.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid104_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-0.243, 3.15, 0.421]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid103.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid103_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[8.73, 4.27, 10.62]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid099.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid099_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[8.73, 4.27, -9.779]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.invalid099.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid099_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-4.542, 0.15, -12.505]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.invalid102.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid102_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-1.441, 1.62, 13.329]}>
        <mesh geometry={nodes.invalid101.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid101_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-4.545, 4.27, -12.459]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.invalid100.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid100_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[1.708, 1.17, 7.94]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.invalid098.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid098_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[8.73, 0.15, -8.629]}>
        <mesh geometry={nodes.invalid097.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid097_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[4.708, 1.62, 13.295]}>
        <mesh geometry={nodes.invalid096.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid096_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[6.833, 0.15, 7.945]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.invalid095.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid095_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[1.708, 1.17, -7.102]}>
        <mesh geometry={nodes.invalid094.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid094_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-4.542, 0.15, 13.306]}>
        <mesh geometry={nodes.invalid093.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid093_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[4.708, 1.62, -12.459]}>
        <mesh geometry={nodes.invalid092.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid092_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[6.833, 0.15, -7.086]}>
        <mesh geometry={nodes.invalid091.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid091_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-1.441, 1.62, -12.459]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.invalid090.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid090_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-4.545, 4.27, 13.302]}>
        <mesh geometry={nodes.invalid089.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid089_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.747, -3.214]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid088.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid088_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.747, 1.911]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid087.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid087_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.747, 7.161]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid086.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid086_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.997, -5.964]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid085.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid085_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.997, -1.089]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid084.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid084_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.997, 3.911]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid083.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid083_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 4.997, 9.036]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid082.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid082_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.047, -8.214]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid081.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid081_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.297, -5.964]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid080.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid080_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.047, -3.214]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid079.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid079_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.297, -1.089]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid078.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid078_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.297, 1.911]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid077.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid077_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.047, 3.911]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid076.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid076_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.297, 7.161]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid075.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid075_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[-8.81, 2.047, 9.036]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.invalid074.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.invalid074_1.geometry} material={materials['Glass.002']} />
      </group>
      <group position={[0.507, 3.893, 2.634]} scale={[1, 0.009, 1.5]}>
        <mesh geometry={nodes.Cube025.geometry} material={materials['Plastic.003']} />
        <mesh geometry={nodes.Cube025_1.geometry} material={materials['Glass.002']} />
      </group>
      <mesh geometry={nodes.zabradli001.geometry} material={materials['Plastic.003']} position={[-9.591, 3.893, 2.188]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 0.009, 1.5]} />
    </group>
  )
}

useGLTF.preload('/model.gltf')