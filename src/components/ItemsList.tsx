import { Sku, Market, Bundle, SkuList } from '@commercelayer/sdk'
import { Asset, Card, Flex, Stack, Text } from '@contentful/f36-components'
import styles from './ItemsList.module.css'

export type Item = Sku & Market & Bundle & SkuList

interface Props {
  items?: Item[]
  onClick?: (item: Item) => void
  itemSelected?: Item
}
export default function ItemsList ({ items, onClick, itemSelected }: Props): JSX.Element | null {
  return items?.length === 0
    ? null
    : (
      <Flex
        padding='spacingXl'
        justifyContent='normal'
        flexWrap='wrap'
        justifyItems='center'
        alignContent='center'
      >
        {items?.map((item, i) => {
          const condition = ['skus', 'bundles'].includes(item.type)
          const selected = item.id === itemSelected?.id
          const title = condition
            ? (
              <Text fontColor='gray900' fontWeight='fontWeightMedium'>
                {item?.name}
              </Text>
              )
            : (
              <Text fontColor='gray900' fontWeight='fontWeightMedium'>
                {item?.name}{' '}
                <Text style={{ textTransform: 'capitalize' }}>
                  ({item.type.slice(0, item.type.length - 1).replace('_', ' ')})
                </Text>
              </Text>
              )
          const content = condition
            ? (
              <Text
                fontColor='gray500'
                fontSize='fontSizeS'
                fontWeight='fontWeightMedium'
              >
                {item?.code}
              </Text>
              )
            : (
              <Text
                fontColor='gray500'
                fontSize='fontSizeS'
                fontWeight='fontWeightMedium'
              >
                {[
                  item?.merchant?.name,
                  item?.inventory_model?.name,
                  item?.price_list?.name,
                  item?.description,
                  item?.sku_list_items?.length
                    ? `${item?.sku_list_items?.length} SKUs`
                    : undefined
                ]
                  .filter((i) => i !== '' && i != null)
                  .join(', ')}
              </Text>
              )
          return (
            <div className={styles.ItemContainer} key={i}>
              <Card
                isSelected={selected}
                onClick={() => (onClick != null) ? onClick(item) : null}
              >
                <Stack
                  flexDirection='column'
                  alignItems='center'
                  margin='spacingXs'
                >
                  {item?.image_url != null
                    ? (
                      <Asset
                        className={styles.CardImage}
                        src={item?.image_url}
                        type='image'
                      />
                      )
                    : (
                      <div className={styles.DefaultCardImage}>
                        <img
                          alt='Default'
                          src='https://raw.githubusercontent.com/commercelayer/commercelayer-data/5470abe4ece45614203d1e91ce0d962f6582b33f/dist/assets/logos/glyph/black/commercelayer_glyph_black.svg?token=GHSAT0AAAAAABWXFWG7E42NGKMBC4PQNHTGYYFASHA'
                          width={50}
                          height={50}
                        />
                      </div>
                      )}
                  <Stack flexDirection='column' alignItems='flex-start'>
                    {title}
                    {content}
                  </Stack>
                </Stack>
              </Card>
            </div>
          )
        })}
      </Flex>
      )
}
