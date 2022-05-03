/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DarwinVS (https://sketchfab.com/darwinvs)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/among-us-blue-c678fc01cdb34c9da37d2dc565c8d2ab
title: Among Us Blue
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/amogus.gltf')
  useFrame((state, delta) => (group.current.rotation.y += 0.01))
  return (
    <group scale={2} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0.4, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Group10102_defaultMat_0.geometry} material={materials.defaultMat} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Group13034_defaultMat_0.geometry} material={materials.defaultMat_0} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Group12248_defaultMat_0.geometry} material={materials.defaultMat_1} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Group46328_defaultMat_0.geometry} material={materials.defaultMat_2} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/amogus.gltf')
