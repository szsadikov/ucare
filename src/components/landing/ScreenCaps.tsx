import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { budgetSummary, fmt, ladderRow, limitRow } from '../../mock/derive'
import { DYNAMICS, DYNAMICS_SCALE } from '../../mock/analytics'
import { LADDER } from '../../mock/rules'
import { LIMIT_ROWS } from '../../mock/limits'
import { MONTHLY_BUDGET } from '../../mock/org'
import { SCREEN_CAPS } from '../../mock/landing'

/**
 * "Dashboard screens" — three previews in a browser chrome. Each one renders a
 * live miniature of the real screen: the first four rows of the tenure ladder,
 * the first three limit rows, and the activation bars.
 */
export function ScreenCaps() {
  const { t } = useI18n()
  const { l } = useShell()
  const b = budgetSummary(MONTHLY_BUDGET, 'month', t)

  const ladderMini = LADDER.slice(0, 4).map((x) => ladderRow(x.key, x.months, t))
  const limitMini = LIMIT_ROWS.slice(0, 3).map((r) => limitRow(r, t))

  return (
    <section
      style={{
        padding: l.padSec,
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg)',
      }}
    >
      <h2 className="h1" style={{ margin: '0 0 8px' }}>
        {t.screensTitle}
      </h2>
      <p className="body-l text-secondary" style={{ margin: '0 0 24px', maxWidth: 680 }}>
        {t.screensSub}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 24 }}>
        {SCREEN_CAPS.map((cap, i) => (
          <div key={cap.kind} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: 'var(--surface)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 12px',
                  background: 'var(--surface-sunken)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span style={{ display: 'flex', gap: 5 }}>
                  {[0, 1, 2].map((d) => (
                    <i
                      key={d}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--border-strong)',
                        display: 'block',
                      }}
                    />
                  ))}
                </span>
                <span
                  style={{
                    flex: 1,
                    height: 22,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    font: 'var(--text-caption)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {cap.url}
                </span>
              </div>
              <div
                style={{
                  height: 'var(--screencap-h)',
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  overflow: 'hidden',
                }}
              >
                {cap.kind === 'rules' &&
                  ladderMini.map((r) => (
                    <div
                      key={r.name}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '80px 1fr',
                        alignItems: 'center',
                        gap: 10,
                      }}
                    >
                      <span
                        className="body-s"
                        style={{
                          color: 'var(--text-secondary)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {r.name}
                      </span>
                      <span
                        style={{
                          position: 'relative',
                          display: 'block',
                          height: 22,
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--surface-sunken)',
                        }}
                      >
                        <i
                          style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: r.pct,
                            background: 'var(--accent-subtle)',
                            border: '1px solid var(--accent)',
                            borderRadius: 'var(--radius-sm)',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: 8,
                            fontStyle: 'normal',
                            font: 'var(--text-chip)',
                            color: 'var(--accent)',
                          }}
                        >
                          {r.from}
                        </i>
                      </span>
                    </div>
                  ))}

                {cap.kind === 'limits' && (
                  <>
                    <span
                      style={{
                        font: 'var(--text-amount-m)',
                        letterSpacing: 'var(--tracking-display)',
                      }}
                    >
                      {fmt(b.total)} UZS
                    </span>
                    <div
                      style={{
                        display: 'flex',
                        height: 8,
                        borderRadius: 'var(--radius-full)',
                        overflow: 'hidden',
                        background: 'var(--surface-sunken)',
                      }}
                    >
                      <i style={{ background: 'var(--accent)', width: b.spentPct }} />
                      <i style={{ background: 'var(--accent-subtle)', width: b.freePct }} />
                    </div>
                    {limitMini.map((r) => (
                      <div
                        key={r.name}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 90px 44px',
                          alignItems: 'center',
                          gap: 10,
                        }}
                      >
                        <span
                          className="body-s"
                          style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {r.name}
                        </span>
                        <span
                          style={{
                            display: 'block',
                            height: 6,
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--surface-sunken)',
                          }}
                        >
                          <i
                            style={{
                              display: 'block',
                              height: '100%',
                              borderRadius: 'var(--radius-full)',
                              width: r.pct,
                              background: r.barColor,
                            }}
                          />
                        </span>
                        <span
                          className="numeric body-s text-muted"
                          style={{ textAlign: 'right' }}
                        >
                          {r.pct}
                        </span>
                      </div>
                    ))}
                  </>
                )}

                {cap.kind === 'analytics' && (
                  <>
                    <div style={{ display: 'flex', gap: 20 }}>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ font: 'var(--text-amount-m)' }}>90%</span>
                        <span className="body-s text-muted">{t.colAccess}</span>
                      </span>
                      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ font: 'var(--text-amount-m)' }}>{b.utilPct}</span>
                        <span className="body-s text-muted">{t.utilTitle}</span>
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: 10,
                        flex: 1,
                        paddingTop: 4,
                      }}
                    >
                      {DYNAMICS.map((value, mi) => (
                        <span
                          key={t.months[mi]}
                          style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 6,
                            height: '100%',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <i
                            style={{
                              display: 'block',
                              width: '100%',
                              borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                              background: 'var(--accent)',
                              height: `${Math.round((value / DYNAMICS_SCALE) * 100)}%`,
                            }}
                          />
                          <i
                            style={{
                              fontStyle: 'normal',
                              font: 'var(--text-caption)',
                              color: 'var(--text-muted)',
                            }}
                          >
                            {t.months[mi]}
                          </i>
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ font: 'var(--text-h3)' }}>{t.screenCaps[i].title}</span>
              <span className="body-s text-muted">{t.screenCaps[i].body}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
