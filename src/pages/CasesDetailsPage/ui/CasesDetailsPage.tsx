import { memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CaseDetails } from '@/entities/CaseDetails'

const CasesDetailsPage = memo(() => {
  const { id } = useParams()
  const navigate = useNavigate()

  if (!id) {
    navigate('*', { replace: true })
    return null
  }


  return (
    <CaseDetails caseId={id} />
  )
})

export default CasesDetailsPage