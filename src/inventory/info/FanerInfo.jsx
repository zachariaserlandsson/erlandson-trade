import React from 'react'
import EtText from '../../EtText.jsx'
import {
  introduction,
  glue,
  fanerRemoval,
  gluePreparation,
  gluing,
  postProcessing,
  surfaceTreatment,
} from '../../assets/strings/FanerInfo'
import { TextWithMargin, MaroonHeader, BulletList } from './InfoTexts.jsx'

const FanerInfo = () => (
  <div>
    <TextWithMargin text={introduction} />
    <MaroonHeader style={{ marginBottom: 0 }} text={glue.header} />
    <EtText>{glue.body}</EtText>
    <BulletList bulletPoints={glue.usageAreas} />
    <MaroonHeader style={{ marginBottom: 0 }} text={fanerRemoval.header} />
    <BulletList bulletPoints={fanerRemoval.steps} numbered />
    <MaroonHeader style={{ marginBottom: 0 }} text={gluePreparation.header} />
    <BulletList bulletPoints={gluePreparation.steps} numbered startFrom={6} />
    <EtText>{gluePreparation.additionalInfo}</EtText>
    <MaroonHeader style={{ marginBottom: 0 }} text={gluing.header} />
    <BulletList bulletPoints={gluing.steps} numbered startFrom={7} />
    <MaroonHeader style={{ marginBottom: 0 }} text={postProcessing.header} />
    <BulletList bulletPoints={postProcessing.steps} numbered startFrom={6} />
    <EtText>{postProcessing.additionalInfo}</EtText>
    <MaroonHeader style={{ marginBottom: 0 }} text={surfaceTreatment.header} />
    <EtText style={{ marginBottom: '1em' }}>{surfaceTreatment.body}</EtText>
  </div>
)

export default FanerInfo
