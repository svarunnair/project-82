import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    vanguard_Mesh: THREE.SkinnedMesh
    vanguard_visor: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    VanguardBodyMat: THREE.MeshPhysicalMaterial
    Vanguard_VisorMat: THREE.MeshPhysicalMaterial
  }
}




export default function Character(props: JSX.IntrinsicElements['group']) {

  const  ActionName = 'Armature|mixamo.com|Layer0'
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(
    require('../../assets/Character.glb')
  ) as GLTFResult
  const { actions } = useAnimations(animations, group)


  useEffect(()=>{
    actions[ActionName]?.play()
  },[actions])




  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.02}
        position={[0,-1.5,0]}>
          <skinnedMesh
            name="vanguard_Mesh"
            geometry={nodes.vanguard_Mesh.geometry}
            material={materials.VanguardBodyMat}
            skeleton={nodes.vanguard_Mesh.skeleton}
          />
          <skinnedMesh
            name="vanguard_visor"
            geometry={nodes.vanguard_visor.geometry}
            material={materials.Vanguard_VisorMat}
            skeleton={nodes.vanguard_visor.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../assets/Character.glb')