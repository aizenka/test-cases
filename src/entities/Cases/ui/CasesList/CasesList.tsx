import { memo, useMemo } from 'react'
import { useUnit } from 'effector-react'
import { classNames } from '@/shared/lib/common'
import { Column, RippleLoader, Row } from '@/shared/ui'
import { generateUUID } from '@/shared/lib/helpers'
import { $cases, getCasesFx } from '../../model/services/getCases'
import { CasesListItem } from '../CasesListItem/CasesListItem'

interface CasesListProps {
  className?: string
}

// TODO: add skeleton for cards and images

export const CasesList = memo((props: CasesListProps) => {
  const { className } = props
  const [cases, isLoading] = useUnit([$cases, getCasesFx.pending])

  const splitedCasesArray = useMemo(() => {
    const middleIndex = Math.ceil(cases.length / 2)
    return [cases.slice(0, middleIndex), cases.slice(middleIndex)]
  }, [cases])

  if (isLoading) {
    return (
      <Column vAlign='center' align='center'>
        <RippleLoader />
      </Column>
    )
  }

  return (
    <Row
      className={classNames('', {}, [className])}
      gap={32}
    >
      {
        splitedCasesArray.map((array) => (
          <Column
            key={generateUUID()}
            gap={32}
            style={{ width: '50%' }}
          >
            {
              array.map((_case) => {
                return (
                  <CasesListItem
                    key={_case.Id}
                    id={_case.Id}
                    friendlyURL={_case.FriendlyURL}
                    image={_case.Image}
                    caseColor={_case.CaseColor}
                    title={_case.Title}
                    filters={_case.Filters}
                  />
                )
              })
            }
          </Column>
        ))
      }
    </Row>
  )
})