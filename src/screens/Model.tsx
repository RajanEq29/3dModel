

import * as THREE from 'three';
import React from 'react';
import {useGLTF} from '@react-three/drei/native';
import {GLTF} from 'three-stdlib';
import { JSX } from 'react/jsx-runtime';

type GLTFResult = GLTF & {
  nodes: {
    ['SBH-57_low_poly001']: THREE.Mesh;
    leftline1: THREE.Mesh;
    rightline1: THREE.Mesh;
    leftalogo: THREE.Mesh;
    leftbottomline1: THREE.Mesh;
    leftd50: THREE.Mesh;
    leftd51: THREE.Mesh;
    polySurface27: THREE.Mesh;
    polySurface27001: THREE.Mesh;
    rightbottomline1: THREE.Mesh;
    ['SBH-57_low_poly003']: THREE.Mesh;
    ['SBH-57_low_poly005']: THREE.Mesh;
    ['SBH-57_low_poly006']: THREE.Mesh;
    ['SBH-57_low_poly007']: THREE.Mesh;
    leftg6: THREE.Mesh;
    leftg6001: THREE.Mesh;
    leftd1: THREE.Mesh;
    leftg5: THREE.Mesh;
    leftg5001: THREE.Mesh;
    rightd15: THREE.Mesh;
    rightg11: THREE.Mesh;
    rightg11001: THREE.Mesh;
    rightd49: THREE.Mesh;
    rightg10: THREE.Mesh;
    rightg10001: THREE.Mesh;
    rightg31: THREE.Mesh;
    rightg4: THREE.Mesh;
    rights2: THREE.Mesh;
    rights3: THREE.Mesh;
    rights4: THREE.Mesh;
    rights6: THREE.Mesh;
    rights7: THREE.Mesh;
    rights9: THREE.Mesh;
    leftb9: THREE.Mesh;
    leftd36: THREE.Mesh;
    leftg3: THREE.Mesh;
    leftg31: THREE.Mesh;
    leftg4: THREE.Mesh;
    lefts1: THREE.Mesh;
    lefts2: THREE.Mesh;
    lefts3: THREE.Mesh;
    rightg2: THREE.Mesh;
    rights1: THREE.Mesh;
    leftd5: THREE.Mesh;
    leftg2: THREE.Mesh;
    tophead: THREE.Mesh;
    rightfighter: THREE.Mesh;
    leftd1001: THREE.Mesh;
    toprightdesign: THREE.Mesh;
    toprightarrow: THREE.Mesh;
    topleftarrow: THREE.Mesh;
    topleftdesign: THREE.Mesh;
    leftg1: THREE.Mesh;
    backalogo: THREE.Mesh;
    rightg1: THREE.Mesh;
    backd1: THREE.Mesh;
    rightalogo: THREE.Mesh;
    leftighter: THREE.Mesh;
    rightg40: THREE.Mesh;
    rightd1001: THREE.Mesh;
    rightd1002: THREE.Mesh;
    leftd1002: THREE.Mesh;
  };
  materials: {
    ['Material.046']: THREE.MeshStandardMaterial;
    ['Material.025']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.027']: THREE.MeshStandardMaterial;
    ['Material.028']: THREE.MeshStandardMaterial;
    ['Material.024']: THREE.MeshStandardMaterial;
    ['Material.023']: THREE.MeshStandardMaterial;
    ['Material.021']: THREE.MeshStandardMaterial;
    ['Material.057']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshStandardMaterial;
    ['Material.039']: THREE.MeshStandardMaterial;
    ['Material.045']: THREE.MeshStandardMaterial;
    ['Material.044']: THREE.MeshStandardMaterial;
    ['Material.047']: THREE.MeshStandardMaterial;
    ['Material.055']: THREE.MeshStandardMaterial;
    ['Material.034']: THREE.MeshStandardMaterial;
    ['Material.019']: THREE.MeshStandardMaterial;
    ['Material.053']: THREE.MeshStandardMaterial;
    ['Material.035']: THREE.MeshStandardMaterial;
    ['Material.018']: THREE.MeshStandardMaterial;
    ['Material.052']: THREE.MeshStandardMaterial;
    ['Material.033']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
    ['Material.054']: THREE.MeshStandardMaterial;
    ['Material.032']: THREE.MeshStandardMaterial;
    ['Material.061']: THREE.MeshStandardMaterial;
    ['Material.050']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.010']: THREE.MeshStandardMaterial;
    ['Material.015']: THREE.MeshStandardMaterial;
    ['Material.014']: THREE.MeshStandardMaterial;
    ['Material.013']: THREE.MeshStandardMaterial;
    ['Material.016']: THREE.MeshStandardMaterial;
    ['Material.017']: THREE.MeshStandardMaterial;
    ['Material.036']: THREE.MeshStandardMaterial;
    ['Material.051']: THREE.MeshStandardMaterial;
    ['Material.062']: THREE.MeshStandardMaterial;
    ['Material.058']: THREE.MeshStandardMaterial;
    ['Material.020']: THREE.MeshStandardMaterial;
    ['Material.038']: THREE.MeshStandardMaterial;
    ['Material.022']: THREE.MeshStandardMaterial;
    ['Material.048']: THREE.MeshStandardMaterial;
    ['Material.037']: THREE.MeshStandardMaterial;
    ['Material.005']: THREE.MeshStandardMaterial;
    ['Material.049']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
    ['Material.043']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.030']: THREE.MeshStandardMaterial;
    ['Material.031']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.041']: THREE.MeshStandardMaterial;
    ['Material.029']: THREE.MeshStandardMaterial;
    ['Material.040']: THREE.MeshStandardMaterial;
    ['Material.009']: THREE.MeshStandardMaterial;
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.026']: THREE.MeshStandardMaterial;
    ['Material.056']: THREE.MeshStandardMaterial;
    ['Material.059']: THREE.MeshStandardMaterial;
    ['Material.042']: THREE.MeshStandardMaterial;
    ['Material.060']: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const {nodes, materials} = useGLTF(require('../assets/yellow.glb')) as unknown as GLTFResult;
  return (
    <group {...props} scale={0.3} dispose={null}>
      <group name="Scene">
        <group name="low%20poly(separate-opacity)obj">
          <group name="SBH-57_low_poly004">
            <mesh
              name="SBH-57_low_poly001"
              castShadow
              receiveShadow
              geometry={nodes['SBH-57_low_poly001'].geometry}
              material={materials['Material.046']}
            />
            <group name="SBH-57_low_poly002">
              <group name="group8">
                <mesh
                  name="leftline1"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftline1.geometry}
                  material={materials['Material.025']}
                  position={[-0.002, 0, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={-1}
                />
                <mesh
                  name="rightline1"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightline1.geometry}
                  material={materials['Material.004']}
                  position={[0.002, 0, 0]}
                />
              </group>
              <mesh
                name="leftalogo"
                castShadow
                receiveShadow
                geometry={nodes.leftalogo.geometry}
                material={materials['Material.027']}
                position={[-2.622, 2.267, -1.897]}
                scale={0.996}
              />
              <mesh
                name="leftbottomline1"
                castShadow
                receiveShadow
                geometry={nodes.leftbottomline1.geometry}
                material={materials['Material.028']}
                position={[-0.005, 0.01, -0.001]}
                rotation={[-Math.PI, 0, 0]}
                scale={-0.996}
              />
              <mesh
                name="leftd50"
                castShadow
                receiveShadow
                geometry={nodes.leftd50.geometry}
                material={materials['Material.024']}
                position={[-2.289, 0.524, 2.071]}
                scale={0.996}
              />
              <mesh
                name="leftd51"
                castShadow
                receiveShadow
                geometry={nodes.leftd51.geometry}
                material={materials['Material.023']}
                position={[-1.959, 0.243, 2.66]}
                scale={0.996}
              />
              <mesh
                name="polySurface27"
                castShadow
                receiveShadow
                geometry={nodes.polySurface27.geometry}
                material={materials['Material.021']}
                position={[0, 0.01, -0.001]}
                scale={0.996}
              />
              <mesh
                name="polySurface27001"
                castShadow
                receiveShadow
                geometry={nodes.polySurface27001.geometry}
                material={materials['Material.057']}
                position={[0, 0.01, -0.001]}
                scale={0.996}
              />
              <mesh
                name="rightbottomline1"
                castShadow
                receiveShadow
                geometry={nodes.rightbottomline1.geometry}
                material={materials['Material.008']}
                position={[2.786, 0.938, 0.098]}
                scale={0.996}
              />
              <group name="transform12" />
            </group>
            <mesh
              name="SBH-57_low_poly003"
              castShadow
              receiveShadow
              geometry={nodes['SBH-57_low_poly003'].geometry}
              material={materials['Material.039']}
            />
            <mesh
              name="SBH-57_low_poly005"
              castShadow
              receiveShadow
              geometry={nodes['SBH-57_low_poly005'].geometry}
              material={materials['Material.045']}
            />
            <mesh
              name="SBH-57_low_poly006"
              castShadow
              receiveShadow
              geometry={nodes['SBH-57_low_poly006'].geometry}
              material={materials['Material.044']}
            />
            <mesh
              name="SBH-57_low_poly007"
              castShadow
              receiveShadow
              geometry={nodes['SBH-57_low_poly007'].geometry}
              material={materials['Material.047']}
            />
          </group>
        </group>
        <group name="polySurface23">
          <group name="transform11" />
        </group>
        <group name="polySurface13" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="leftg6"
            castShadow
            receiveShadow
            geometry={nodes.leftg6.geometry}
            material={materials['Material.055']}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
          />
          <mesh
            name="leftg6001"
            castShadow
            receiveShadow
            geometry={nodes.leftg6001.geometry}
            material={materials['Material.034']}
            rotation={[-Math.PI, 0, 0]}
            scale={-1}
          />
          <group name="polySurface40">
            <group name="group10" position={[3, 0, 0]}>
              <group name="group11">
                <mesh
                  name="leftd1"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftd1.geometry}
                  material={materials['Material.019']}
                  position={[-3.025, 0, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={-1}
                />
                <mesh
                  name="leftg5"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftg5.geometry}
                  material={materials['Material.053']}
                  position={[-3.03, 0, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={-1}
                />
                <mesh
                  name="leftg5001"
                  castShadow
                  receiveShadow
                  geometry={nodes.leftg5001.geometry}
                  material={materials['Material.035']}
                  position={[-3.03, 0, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={-1}
                />
                <mesh
                  name="rightd15"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightd15.geometry}
                  material={materials['Material.018']}
                  position={[-3.025, 0, 0]}
                />
                <mesh
                  name="rightg11"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightg11.geometry}
                  material={materials['Material.052']}
                  position={[-2.97, 0, 0]}
                />
                <mesh
                  name="rightg11001"
                  castShadow
                  receiveShadow
                  geometry={nodes.rightg11001.geometry}
                  material={materials['Material.033']}
                  position={[-2.97, 0, 0]}
                />
              </group>
            </group>
            <group
              name="transform15"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <mesh
            name="rightd49"
            castShadow
            receiveShadow
            geometry={nodes.rightd49.geometry}
            material={materials['Material.012']}
            position={[227.694, 225.434, -62.041]}
          />
          <mesh
            name="rightg10"
            castShadow
            receiveShadow
            geometry={nodes.rightg10.geometry}
            material={materials['Material.054']}
          />
          <mesh
            name="rightg10001"
            castShadow
            receiveShadow
            geometry={nodes.rightg10001.geometry}
            material={materials['Material.032']}
          />
          <mesh
            name="rightg31"
            castShadow
            receiveShadow
            geometry={nodes.rightg31.geometry}
            material={materials['Material.061']}
          />
          <mesh
            name="rightg4"
            castShadow
            receiveShadow
            geometry={nodes.rightg4.geometry}
            material={materials['Material.050']}
          />
          <mesh
            name="rights2"
            castShadow
            receiveShadow
            geometry={nodes.rights2.geometry}
            material={materials['Material.011']}
          />
          <mesh
            name="rights3"
            castShadow
            receiveShadow
            geometry={nodes.rights3.geometry}
            material={materials['Material.010']}
          />
          <mesh
            name="rights4"
            castShadow
            receiveShadow
            geometry={nodes.rights4.geometry}
            material={materials['Material.015']}
          />
          <mesh
            name="rights6"
            castShadow
            receiveShadow
            geometry={nodes.rights6.geometry}
            material={materials['Material.014']}
          />
          <mesh
            name="rights7"
            castShadow
            receiveShadow
            geometry={nodes.rights7.geometry}
            material={materials['Material.013']}
          />
          <mesh
            name="rights9"
            castShadow
            receiveShadow
            geometry={nodes.rights9.geometry}
            material={materials['Material.016']}
          />
        </group>
        <group
          name="polySurface31"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-0.01}>
          <mesh
            name="leftb9"
            castShadow
            receiveShadow
            geometry={nodes.leftb9.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="leftd36"
            castShadow
            receiveShadow
            geometry={nodes.leftd36.geometry}
            material={materials['Material.036']}
            position={[227.683, 225.434, -62.041]}
          />
          <mesh
            name="leftg3"
            castShadow
            receiveShadow
            geometry={nodes.leftg3.geometry}
            material={materials['Material.051']}
          />
          <mesh
            name="leftg31"
            castShadow
            receiveShadow
            geometry={nodes.leftg31.geometry}
            material={materials['Material.062']}
          />
          <mesh
            name="leftg4"
            castShadow
            receiveShadow
            geometry={nodes.leftg4.geometry}
            material={materials['Material.058']}
          />
          <mesh
            name="lefts1"
            castShadow
            receiveShadow
            geometry={nodes.lefts1.geometry}
            material={materials['Material.020']}
          />
          <mesh
            name="lefts2"
            castShadow
            receiveShadow
            geometry={nodes.lefts2.geometry}
            material={materials['Material.038']}
          />
          <mesh
            name="lefts3"
            castShadow
            receiveShadow
            geometry={nodes.lefts3.geometry}
            material={materials['Material.022']}
          />
        </group>
        <mesh
          name="rightg2"
          castShadow
          receiveShadow
          geometry={nodes.rightg2.geometry}
          material={materials['Material.048']}
        />
        <mesh
          name="rights1"
          castShadow
          receiveShadow
          geometry={nodes.rights1.geometry}
          material={materials['Material.037']}
        />
        <mesh
          name="leftd5"
          castShadow
          receiveShadow
          geometry={nodes.leftd5.geometry}
          material={materials['Material.005']}
        />
        <mesh
          name="leftg2"
          castShadow
          receiveShadow
          geometry={nodes.leftg2.geometry}
          material={materials['Material.049']}
          position={[0, 0, -0.006]}
          rotation={[Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="tophead"
          castShadow
          receiveShadow
          geometry={nodes.tophead.geometry}
          material={materials['Material.002']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="rightfighter"
          castShadow
          receiveShadow
          geometry={nodes.rightfighter.geometry}
          material={materials['Material.006']}
        />
        <mesh
          name="leftd1001"
          castShadow
          receiveShadow
          geometry={nodes.leftd1001.geometry}
          material={materials['Material.043']}
        />
        <mesh
          name="toprightdesign"
          castShadow
          receiveShadow
          geometry={nodes.toprightdesign.geometry}
          material={materials['Material.001']}
          position={[0.005, 0, 0]}
        />
        <mesh
          name="toprightarrow"
          castShadow
          receiveShadow
          geometry={nodes.toprightarrow.geometry}
          material={materials['Material.030']}
          position={[0, 0.002, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="topleftarrow"
          castShadow
          receiveShadow
          geometry={nodes.topleftarrow.geometry}
          material={materials['Material.031']}
          position={[0, 0.002, 0]}
        />
        <mesh
          name="topleftdesign"
          castShadow
          receiveShadow
          geometry={nodes.topleftdesign.geometry}
          material={materials['Material.003']}
          position={[-0.005, 0, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="leftg1"
          castShadow
          receiveShadow
          geometry={nodes.leftg1.geometry}
          material={materials['Material.041']}
        />
        <mesh
          name="backalogo"
          castShadow
          receiveShadow
          geometry={nodes.backalogo.geometry}
          material={materials['Material.029']}
        />
        <mesh
          name="rightg1"
          castShadow
          receiveShadow
          geometry={nodes.rightg1.geometry}
          material={materials['Material.040']}
        />
        <mesh
          name="backd1"
          castShadow
          receiveShadow
          geometry={nodes.backd1.geometry}
          material={materials['Material.009']}
        />
        <group name="group9" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="rightalogo"
            castShadow
            receiveShadow
            geometry={nodes.rightalogo.geometry}
            material={materials['Material.007']}
          />
        </group>
        <mesh
          name="leftighter"
          castShadow
          receiveShadow
          geometry={nodes.leftighter.geometry}
          material={materials['Material.026']}
        />
        <group name="rightg20" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="rightg40"
            castShadow
            receiveShadow
            geometry={nodes.rightg40.geometry}
            material={materials['Material.056']}
          />
        </group>
        <mesh
          name="rightd1001"
          castShadow
          receiveShadow
          geometry={nodes.rightd1001.geometry}
          material={materials['Material.059']}
          rotation={[Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="rightd1002"
          castShadow
          receiveShadow
          geometry={nodes.rightd1002.geometry}
          material={materials['Material.042']}
          rotation={[Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="leftd1002"
          castShadow
          receiveShadow
          geometry={nodes.leftd1002.geometry}
          material={materials['Material.060']}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require('../assets/yellow.glb'));