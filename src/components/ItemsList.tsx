import { Sku, Market, Bundle, SkuList } from '@commercelayer/sdk'
import {
  Asset,
  Card,
  Flex,
  Paragraph,
  SectionHeading,
  Typography,
} from '@contentful/forma-36-react-components'
import styles from './ItemsList.module.css'

export type Item = Sku & Market & Bundle & SkuList

type Props = {
  items?: Item[]
  onClick?: (item: Item) => void
  itemSelected?: Item
}
export default function ItemsList({ items, onClick, itemSelected }: Props) {
  return items?.length === 0 ? null : (
    <Flex
      padding="spacingXl"
      justifyContent="normal"
      flexWrap="wrap"
      justifyItems="center"
      alignItems="center"
    >
      {items?.map((item, i) => {
        const selected = item.id === itemSelected?.id
        return (
          <div className={styles.ItemContainer} key={i}>
            <Card selected={selected} onClick={() => onClick && onClick(item)}>
              {item?.image_url ? (
                <Asset
                  className={styles.CardImage}
                  src={item?.image_url}
                  type="image"
                />
              ) : null}
              <Typography>
                <SectionHeading>{item?.name}</SectionHeading>
                <Paragraph className={styles.SkuCode}>{item?.code}</Paragraph>
              </Typography>
            </Card>
          </div>
        )
      })}
    </Flex>
  )
}
