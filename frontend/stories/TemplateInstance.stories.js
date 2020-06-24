import React from 'react';
import { action } from '@storybook/addon-actions';
import TemplateInstance from '../src/components/builder/TemplateInstance'

export default {
  title: 'TemplateInstance',
  component: TemplateInstance
}
const props = {
  valueSets: null,
  loadValueSets: () => {},
  getPath: () => {},
  treeName: "expTreeInclude",
  templateInstance: {
    id: "Gender",
    name: "Gender",
    returnType: "boolean",
    cannotHaveModifiers: true,
    validator: {args: null, fields: ["gender"], type: "require"},
    uniqueId: "Gender-510",
    fields:[
      {id:"element_name",type:"string",name:"Element Name"},
      {id:"comment",type:"textarea",name:"Comment"},
      {id:"gender",type:"valueset",select:"demographics/gender",name:"Gender"}
    ],
    modifiers: []
  },
  otherInstances: [
    {
      id:"Gender",
      name:"Gender",
      returnType:"boolean",
      cannotHaveModifiers:true,
      validator: {
        type:"require",
        fields:["gender"],
        args:null
      },
      fields:[
        {id:"element_name",type:"string",name:"Element Name"},
        {id:"comment",type:"textarea",name:"Comment"},
        {id:"gender",type:"valueset",select:"demographics/gender",name:"Gender"}
        ],
      uniqueId:"Gender-510",
      modifiers:[],
      tab:"expTreeInclude"}
  ],
  allInstancesInAllTrees: [
    {
      id: "Gender",
      name: "Gender",
      returnType: "boolean",
      cannotHaveModifiers: true,
      validator: {
        type: "require",
        fields: ["gender"],
        args: null
      },
      fields: [
        {id:"element_name",type:"string",name:"Element Name"},
        {id: "comment", name: "Comment", type: "textarea"},
        {id: "gender", name: "Gender", select: "demographics/gender"}
      ],
      uniqueId: "Gender-510",
      modifiers: [],
      tab: "expTreeInclude"
    }
  ],
  editInstance: () => {},
  updateInstanceModifiers: () => {},
  deleteInstance: () => {},
  renderIndentButtons: () => {},
  conversionFunctions: [
    {description: "mmol/L to mg/dL for blood cholesterol", name: "Convert.to_mg_per_dL"}
  ],
  instanceNames: [
    {id: "Gender-510", name: ""},
    {id: "default-subpopulation-1", name: "Doesn't Meet Inclusion Criteria"},
    {id: "default-subpopulation-2", name: "Meets Exclusion Criteria"},
    {id: "And-25", name: "Subpopulation 1"}
  ],
  parameters: [],
  baseElements: [],
  scrollToElement: () => {},
  loginVSACUser: () => {},
  setVSACAuthStatus: () => {},
  vsacStatus: null,
  vsacStatusText: "",
  searchVSACByKeyword: () => {},
  isSearchingVSAC: false,
  vsacSearchResults: [],
  vsacSearchCount: 0,
  getVSDetails: () => {},
  isRetrievingDetails: false,
  vsacDetailsCodes: [],
  vsacDetailsCodesError: "",
  vsacFHIRCredentials: {
    username: null,
    password: null
  },
  isValidatingCode: false,
  isValidCode: null,
  codeData: null,
  validateCode: () => {},
  resetCodeValidation: () => {}
}


export const Example = () => <TemplateInstance {...props} />
