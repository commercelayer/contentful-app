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
  items: Item[]
}
export default function ItemsList({ items }: Props) {
  return items.length === 0 ? null : (
    <Flex
      padding="spacingXl"
      justifyContent="normal"
      flexWrap="wrap"
      justifyItems="center"
      alignItems="center"
    >
      {items.map((item, i) => {
        console.log(`item`, item)
        return (
          <div className={styles.ItemContainer} key={i}>
            <Card>
              {item?.image_url ? (
                <Asset src={`${item?.image_url}&w=200`} type="image" />
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
